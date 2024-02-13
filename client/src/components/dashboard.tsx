import { useState } from 'react';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-screen">
      <div className="flex h-screen">
        {/* corrousel */}
        <div className="w-[25vw] sticky bg-gray-900">
          <div className="flex flex-col items-start h-screen">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl font-montserrat text-white pt-4 ml-10">
              blackBoard.ai
            </h1>
            <div className="flex flex-col items-end h-full justify-center w-full gap-2 px-3 ">
              <button
                type="button"
                className={`w-full py-2 px-4 text-xl font-medium flex items-center  rounded-lg ${
                  activeTab === 'Home'
                    ? 'text-white bg-gray-800 hover:bg-gray-700'
                    : 'text-gray-400 hover:text-gray-400 '
                }`}
                onClick={() => handleTabClick('Home')}
              >
                Home
              </button>
              <button
                type="button"
                className={`w-full py-2 px-4 text-xl font-medium flex items-center  rounded-lg ${
                  activeTab === 'blackBoard.Ai'
                    ? 'text-white bg-gray-800 hover:bg-gray-700'
                    : 'text-gray-400 hover:text-gray-400 '
                }`}
                onClick={() => handleTabClick('blackBoard.Ai')}
              >
                blackBoard.Ai
              </button>
              <button
                type="button"
                className={`w-full py-2 px-4 text-xl font-medium flex items-center  rounded-lg ${
                  activeTab === 'PPT.Ai'
                    ? 'text-white bg-gray-800 hover:bg-gray-700'
                    : 'text-gray-400 hover:text-gray-400 '
                }`}
                onClick={() => handleTabClick('PPT.Ai')}
              >
                PPT.Ai
              </button>
              <button
                type="button"
                className={`w-full py-2 px-4 text-xl font-medium flex items-center  rounded-lg ${
                  activeTab === 'doubtSolver.Ai'
                    ? 'text-white bg-gray-800 hover:bg-gray-700'
                    : 'text-gray-400 hover:text-gray-400 '
                }`}
                onClick={() => handleTabClick('doubtSolver.Ai')}
              >
                doubtSolver.Ai
              </button>
            </div>
          </div>
        </div>
        {/* dash sec 2 */}
        <div className="w-full">
          <div className="w-full bg-white flex items-center justify-between px-2 py-3 border-b border">
            <div>{activeTab}</div>
            <div className="flex  items-center gap-3">
              <h3 className="scroll-m-20 text-sm tracking-tight">John Doe</h3>
              <img src="/assets/userImage.png" alt="" className="h-10 pr-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
