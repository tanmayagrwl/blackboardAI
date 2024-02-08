import { Button } from './ui/button';
import { Input } from './ui/input';

function Upload() {
  function handleUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const file = formData.get('file') as File;

    console.log(file);
  }

  return (
    <div className="flex w-full h-[85vh] justify-center items-center bg-[#F1F5F9]">
      <div className=" flex flex-col items-center justify-center px-10 h-[50vh] shadow-2xl rounded-2xl mx-5 sm:mx-5 lg:mx-0">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl font-montserrat text-sky-900 pb-12">
          blackBoard.ai
        </h1>
        <div className="text-lg font-semibold pb-7">Upload your file</div>
        <form className="space-y-4" onSubmit={handleUpload}>
          <Input
            type="file"
            name="file"
            multiple={false}
            className="flex items-center justify-center"
            accept="image/*"
          />
          <Button type="submit" className="w-full">
            Upload
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
