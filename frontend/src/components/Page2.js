import React from "react";
import LaptopResults from "./LaptopResults";
import "../css/page2.css";
import {useSearchParams} from 'react-router-dom'
import Sidebar from "./SideBar";
import {Breadcrumb, BreadcrumbItem} from "react-bootstrap";
function Page2() {
  let [searchParams] = useSearchParams();

  console.log(searchParams)
  return (
    <>
      <div className="p-4">
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/">Computers & Tablets</BreadcrumbItem>
          <BreadcrumbItem href="/laptops">Laptops</BreadcrumbItem>
          <BreadcrumbItem href="/custom_search/step1">Find your Perfect Laptop</BreadcrumbItem>
          <BreadcrumbItem href="/" active >Results</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-3">
            <Sidebar/>
          </div>
          <div className="col-9">
            <div className="filter-category-title fs-5">
              Our Recommendations for you:
            </div>
            <LaptopResults filters={searchParams}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2;
