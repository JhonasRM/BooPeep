import React from 'react';

function Sidebar() {
    return (
        <div>
        
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-purple-300 border-purple-400 border-solid border-2 rounded-r-3xl dark:bg-gray-800">
      <a href="#" className="flex items-center pl-2.5 mb-5">
         <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BooPeep</span>
      </a>
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <img src='src\assets\imagens\icons8-feed-de-atividade-26.png' width="26px" height="26px"/>                
               <span className="ml-3">Postagens</span>
            </a>
         </li>
         
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src='src\assets\imagens\icons8-bate-papo-32.png' width="26px" height="26px"/>                
               <span className="flex-1 ml-3 whitespace-nowrap">Chat</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src='src\assets\imagens\icons8-mapa-26.png' width="26px" height="26px"/>                
               <span className="flex-1 ml-3 whitespace-nowrap">Mapa</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src='src\assets\imagens\icons8-histórico-50.png' width="26px" height="26px"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Historico</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src='src\assets\imagens\icons8-usuário-26 (1).png' width="26px" height="26px"/>                
               <span className="flex-1 ml-3 whitespace-nowrap">Usuário</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src='src\assets\imagens\icons8-sobre-26.png' width="26px" height="26px"/>                
               <span className="flex-1 ml-3 whitespace-nowrap">Sobre</span>
            </a>
         </li>
      </ul>
      
      <div className='border-t-2 border-purple-400 my-2 py-2'>
        <p>© Codetatio - 2023-2023</p>
      </div>
   </div>
</aside>

<div className="p-4 sm:ml-64">
   <div className="p-4 border-4 border-purple-200 border-solid rounded-lg dark:border-gray-700 bg-purple-300">
      <div className="grid grid-cols-3 gap-4 mb-4">
      </div>
   </div>
    </div>

    </div>        
    )
}

export default Sidebar;