import { ImportComponent } from './Component/Profile/ProfilePhoto.js';
import { ImportFullName } from './Component/Profile/FullName.js';
import { ImportAdress } from './Component/Profile/Address.js';
import './App.css';
import logo from './logo.svg';



function App() {
  return (
    
    <>
    <div className={App}>
      <header className="App-header">
     
     <p>  <img src={logo} className="App-logo" alt="logo" /></p> 
        
      
      </header><br/>

    </div>

    <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
            
            <div className="w-full md:w-3/12 md:mx-2">
                
                <div className="bg-white p-3 border-t-4 border-blue-500">
                    <div className="image overflow-hidden">
                      
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1"> Profile Studient </h1>
                    
                    <ImportComponent />
                    <ul
                        className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Status</span>
                            <span className="ml-auto"><span
                                    className="bg-blue-500 py-1 px-2 rounded text-white text-sm">React JS Student</span></span>
                        </li>
                        <li className="flex items-center py-3">
                            <span>Full Name : </span>
                            <span className="ml-auto"><ImportFullName /></span>
                        </li>
                    </ul>
                </div>
                
                <div className="my-4"></div>
                
                <div className="bg-white p-3 hover:shadow">
                    <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <span className="text-blue-500">
                            <svg className="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <span>hobbies </span>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="text-center my-2">
                          
                            <a href="#" className="text-main-color"> Sports </a>
                        </div>
                        <div className="text-center my-2">
                          
                            <a href="#" className="text-main-color">Lectures</a>
                        </div>
                        <div className="text-center my-2">
                          
                            <a href="#" className="text-main-color">Voyages</a>
                        </div>
                      
                    </div>
                </div>
                
            </div>
            
            <div className="w-full md:w-9/12 mx-2 h-64">
                
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">Profile studient </span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Full Name</div>
                                <div className="px-4 py-2"> <ImportFullName /></div>
                            </div>
                           
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Gender</div>
                                <div className="px-4 py-2">Male </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2">+212680666905</div>
                            </div>
                            
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Current Address</div>
                                <div className="px-4 py-2"><ImportAdress /></div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email.</div>
                                <div className="px-4 py-2">
                                    <a className="text-blue-800" href="mailto:jane@example.com">abdelfettah.jabri@gmail.com</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                <div className="px-4 py-2">24 Juillet 1982</div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Skills
                        And Education</button>
                </div>
                

                <div className="my-4"></div>

                
                <div className="bg-white p-3 shadow-sm rounded-sm">

                    <div className="grid grid-cols-2">
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Skills</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">Database Management Systems</div>
                                    <div className="text-gray-500 text-xs">MySQL, SQL SERVER ,Oracle Database</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Backend Technologies and Frameworks</div>
                                    <div className="text-gray-500 text-xs">NodeJS ,React JS, PHP ,codeigniter,Python </div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Front-end Languages and Frameworks</div>
                                    <div className="text-gray-500 text-xs">HTML, CSS, JavaScript ,TypeScript, jQuery</div>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Education</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">Masters Degree in Aerosup school of aerospace engineering</div>
                                    <div className="text-gray-500 text-xs"> 2014 - 2016</div>
                                </li>
                                <li>
                                    <div className="text-teal-600">Bachelors Degreen in EAI</div>
                                    <div className="text-gray-500 text-xs">2004- 2007</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>


    
    
    
    
    
    </>
    
  );
}

export default App;

