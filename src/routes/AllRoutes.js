import { Routes, Route } from "react-router-dom";
import {  NewsList, NewsDetails,Search, PageNotFound } from "../pages";



const AllRoutes = ({darkMode}) => {
  return (
    <div className={`${darkMode}` ?  "dark:bg-slate-800": "bg-white"}> 
    <Routes>
        <Route path="" element= {<NewsList title="Home"/>}/>
        <Route path="/news/category/:article_id" element={<NewsDetails />}/>
        <Route path="news/category=top" element= {<NewsList apiPath="category=top" title="Top"  />}/>
        <Route path="news/category=crime" element= {<NewsList apiPath="category=crime" title="Crime"/>}/>
        <Route path="news/category=sports" element= {<NewsList apiPath="category=sports" title="Sports"/>}/>
       < Route path="news/category=entertainment" element= {<NewsList apiPath="category=entertainment" title="Entertainment"/>}/>
        <Route path="search" element={<Search apiPath=""/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </div>
  )
}

export default AllRoutes
