import { useState } from "react/cjs/react.development";
import News from "./components/News";
import Pagination from "./components/Pagination";
import Sidebar from "./components/Sidebar";
import ThemeContextProvider from "./context/ThemeContext";
import UseFetch from "./useFetch";


function App() {
  const { isLoading,data } = UseFetch('https://jsonplaceholder.typicode.com/posts')

  const [ currentPage,setCurrentPage ] = useState(1)
  const [ postsPerPage ] = useState(6)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const reqPostsPerPage = data.slice( indexOfFirstPost,indexOfLastPost )

  const handlePagination = (number) => {
    setCurrentPage(number)
  }

  return (
    <ThemeContextProvider>
    <div className="App">
      <Sidebar />
      <div className="content">
        { !isLoading && <News isLoading={ isLoading } data={ reqPostsPerPage } />}
      </div>
      <div className="pageSelect">
        <Pagination totalPosts={ data.length } postsPerPage={ postsPerPage } currentPage={ currentPage } setCurrentPage={ setCurrentPage } handlePagination={ handlePagination }/>
      </div>
    </div>
    </ThemeContextProvider>
  );
}

export default App;
