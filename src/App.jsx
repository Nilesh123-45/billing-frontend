// import Menubar from './components/Menubar/Menubar';
// import Dashboard from './pages/Dashboard/Dashboard';
// import ManageCategory from './pages/ManageCategory/Managecategory';
// import ManageItems from './pages/ManageItems/Manageitems';
// import ManageUsers from './pages/ManageUsers/Manageusers';
// import Explore from './pages/Explore/Explore';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast'
// import Login from "./pages/Login/Login.jsx"
// import OrderHistory from './pages/OrderHistory/OrderHistory.jsx';

// // Import your CSS files
// import './index.css';
// import './App.css'; // <-- Make sure to import App.css
// import { useContext } from 'react';
// import AppContext from './context/AppContext.jsx';

// const App = () => {

//   const location=useLocation();
//   const {auth}= useContext(AppContext);

//   const LoginRoute = (element) =>{
// if(auth.token){ 
//      return <Navigate to="/dashboard" replace />
//      }
//     return element;
//   }

//    const ProtectedRoute =({element,allowedRoles})=>{
//     if(!auth.token){
//       return <Navigate to="/login" replace />
//     }
//     if(allowedRoles && !allowedRoles.includes(auth.role)){

//       return <Navigate to="/dashboard" replace />
//     }
//     return element;

//    }

//   return (
//     // Use a React Fragment (<>) instead of a <div>
//     // This makes Menubar and .content-area direct children of #root
//     <>

//     {location.pathname != "/login" && <Menubar/>} 
//       {/* <Menubar /> */}
//       <Toaster />
      
//       {/* This new div will wrap your pages and grow to fill the screen */}
//       <div className="content-area">
//         <Routes>
//           <Route path="/" element={<Navigate to="/dashboard" />} />
//           <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
//           <Route path="/explore" element={<ProtectedRoute element={<Explore />} />}/>
//           {/*Admin only routes */}

//           <Route path="/category" element= {<ProtectedRoute element={<ManageCategory/>} allowedRoles={['ROLE_ADMIN']} />} />
//           <Route path="/items" element={<ProtectedRoute element={<ManageItems />} allowedRoles={['ROLE_ADMIN']}/>} />
//           <Route path="/users" element={<ProtectedRoute element={<ManageUsers />} allowedRoles={['ROLE_ADMIN']}/>} />
          
//           <Route path="/login" element={<LoginRoute element={<Login />}/>}/>
//           <Route path="/orders" element={<ProtectedRoute element={<OrderHistory />} />} />
            
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default App;


import Menubar from './components/Menubar/Menubar';
import Dashboard from './pages/Dashboard/Dashboard';
// import ManageCategory from './pages/ManageCategory/Managecategory';
import ManageCategory from './pages/ManageCategory/ManageCategory';

import ManageItems from './pages/ManageItems/Manageitems';
import ManageUsers from './pages/ManageUsers/Manageusers';
import Explore from './pages/Explore/Explore';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import Login from "./pages/Login/Login.jsx"
import OrderHistory from './pages/OrderHistory/OrderHistory.jsx';

// Import your CSS files
import './index.css';
import './App.css'; // <-- Make sure to import App.css
import { useContext } from 'react';
import AppContext from './context/AppContext.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

const App = () => {

  const location = useLocation();
  const { auth } = useContext(AppContext);

  // 1. FIX: Rewrite LoginRoute as a wrapper component
  const LoginRoute = ({ children }) => {
    if (auth.token) {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  };

  // 2. FIX: Rewrite ProtectedRoute as a wrapper component
  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (!auth.token) {
      return <Navigate to="/login" replace />;
    }
    if (allowedRoles && !allowedRoles.includes(auth.role)) {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  };

  return (
    <>
      {location.pathname !== "/login" && <Menubar />}
      <Toaster />

      <div className="content-area">
        {/* 3. FIX: Apply the wrapper components to ALL routes */}
        <Routes>
          <Route path="/login" element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          } />
          
          <Route path="/" element={<Navigate to="/dashboard" />} />
          
          
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
           
          
          <Route path="/explore" element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          } />
          
          <Route path="/orders" element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          } />

          {/* Admin only routes */}
          <Route path="/category" element={
            <ProtectedRoute allowedRoles={['ROLE_ADMIN']}>
              <ManageCategory />
            </ProtectedRoute>
          } />
          <Route path="/items" element={
            <ProtectedRoute allowedRoles={['ROLE_ADMIN']}>
              <ManageItems />
            </ProtectedRoute>
          } />
          <Route path="/users" element={
            <ProtectedRoute allowedRoles={['ROLE_ADMIN']}>
              <ManageUsers />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;