import data from "../../data/gallery.json";

export default function List() {
  return (
    <>
    {
      data.map((element) => {
        return (
          <div>
            <h2>{element.title}</h2>
          </div>
        );
      })      
    }
    </>
  )
}