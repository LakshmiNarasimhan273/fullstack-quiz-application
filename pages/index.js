// // import Head from "next/head";
// // import { useState } from 'react';
// // import FrontPageForm from "../Components/FrontPageForm";
// // import Header from "../Components/Header";
// // import Question from "../Components/Question";
// // import Result from '../Components/Result';
// // import { useSelector } from 'react-redux';
// // import { useRouter } from 'next/router';

// // const Home = () => {
// //   const [formData, setFormData] = useState(null); // Store form data
// //   const [showForm, setShowForm] = useState(true); // State to control form visibility
// //   const StatsTwo = useSelector((Stat) => Stat.ReducerTwo);
// //   const router = useRouter();

// //   const handleFormSubmit = (data) => {
// //     console.log('Form data:', data);
  
// //     setFormData(data);
// //     setShowForm(false);
  
// //     console.log('Before navigation to Header');
// //     router.push('/Header');
  
// //     console.log('Before navigation to Question');
// //     router.push('/Question');
// //   };
 
// //   const closeForm = () => {
// //     // Close the form when the user decides to close it
// //     setShowForm(false);
// //   };

// //   return (
// //     <>
// //       <Head>
// //         <title>Home - Quiz App</title>
// //       </Head>

// //       {showForm && (
// //         <div className="modal-overlay">
// //           <div className="modal-content">
// //             <FrontPageForm onSubmit={handleFormSubmit} />
// //             <button onClick={closeForm}>Close Form</button>
// //           </div>
// //         </div>
// //       )}

// //       {!StatsTwo.Show && !showForm && (
// //         <div className="flex flex-col justify-center mx-auto sm:max-w-[60vw] max-w-[98vw] h-[100vh] ">
// //           <Header />
// //           <Question />
// //         </div>
// //       )}

// //       {StatsTwo.Show && (
// //         <div className="w-[100vw] h-[50vh] sm:h-[100vh] grid place-items-center">
// //           <Result />
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Home;
// // import Head from "next/head";
// // import { useState } from 'react';
// // import FrontPageForm from "../Components/FrontPageForm";
// // import Header from "../Components/Header";
// // import Question from "../Components/Question";
// // import Result from '../Components/Result';
// // import { useSelector } from 'react-redux';
// // import { useRouter } from 'next/router';

// // const Home = () => {
// //   const [formData, setFormData] = useState(null); // Store form data
// //   const [showForm, setShowForm] = useState(true); // State to control form visibility
// //   const StatsTwo = useSelector((Stat) => Stat.ReducerTwo);
// //   const router = useRouter();

// //   const handleFormSubmit = (data) => {
// //     console.log('Form data:', data);
  
// //     setFormData(data);
// //     setShowForm(false);

// //     // Manually navigate to '/Header' after form submission
// //     router.push('/Header');
// //   };
 
// //   const closeForm = () => {
// //     // Close the form when the user decides to close it

// //     // Manually navigate to '/Question' after closing the form
// //     router.push('/Question');
// //   };

// //   return (
// //     <>
// //       <Head>
// //         <title>Home - Quiz App</title>
// //       </Head>

// //       {showForm && (
// //         <div className="modal-overlay">
// //           <div className="modal-content">
// //             <FrontPageForm onSubmit={handleFormSubmit} />
// //             <button onClick={handleFormSubmit}>Close Form</button>
// //           </div>
// //         </div>
// //       )}

// //       {!StatsTwo.Show && !showForm && (
// //         <div className="flex flex-col justify-center mx-auto sm:max-w-[60vw] max-w-[98vw] h-[100vh] ">
// //           <Header />
// //           <Question />
// //         </div>
// //       )}

// //       {StatsTwo.Show && (
// //         <div className="w-[100vw] h-[50vh] sm:h-[100vh] grid place-items-center">
// //           <Result />
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Home;
import Head from "next/head";
 import { useState } from 'react';
 import FrontPageForm from "../Components/FrontPageForm";
import Header from "../Components/Header";
import Question from "../Components/Question";
 import Result from '../Components/Result';
 import { useSelector } from 'react-redux';
 import { useRouter } from 'next/router';

 
const Home = () => {
  const [formData, setFormData] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const StatsTwo = useSelector((Stat) => Stat.ReducerTwo);
  const router = useRouter();

  const handleFormSubmit = (data) => {
    sessionStorage.setItem('quizFormData', JSON.stringify(data));
    setFormData(data);
    setShowForm(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Head>
        <title>Home - Quiz App</title>
      </Head>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <FrontPageForm onSubmit={handleFormSubmit} />
            <button onClick={closeForm}></button>
          </div>
        </div>
      )}

      {!StatsTwo.Show && !showForm && (
        <div className="flex flex-col justify-center mx-auto sm:max-w-[60vw] max-w-[98vw] h-[100vh] ">
          <Header />
          <Question />
        </div>
      )}

      {StatsTwo.Show && formData && (
        <div className="w-[100vw] h-[50vh] sm:h-[100vh] grid place-items-center">
          <Result username={formData.name} />
        </div>
      )}
    </>
  );
};

export default Home;
