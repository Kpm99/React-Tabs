import { useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  async function fetchData() {
    let data = await fetch("https://www.course-api.com/react-tabs-project");
    let jsonData = await data.json();
    setData(jsonData);
    console.log("jsonData", jsonData);
  }

  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="jobs-center">
      <div>
        {data.map((i,index) => {
          return (
            <div className="btn-container">
              {" "}
              <button className="job-btn" onClick={()=>setIndex(index)}>
                {i.company}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        {data.length > 0 && (
          <div>
            <h3>{data[index].title}</h3>

            <button className="job-company">{data[index].company}</button>

            <p className="job-date">{data[index].dates}</p>
            {data[index].duties.map((i) => {
              return (
                <div className="job-desc">
                  <p>{i}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
