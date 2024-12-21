import ChatHistory from "./components/History";
import Prompt from "./components/Prompt";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="">
            <div className="h-screen w-screen bg-gray-100 flex">
                {/* Sidebar */}
                <Sidebar/>
                {/* Body */}
                <div className="w-full h-screen p-6 relative">
                    {/* Chat History */}

                    <ChatHistory />
                    <div className="absolute bottom-10 left-0 right-0 p-4">
                        {/* prompt */}
                        <Prompt />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
