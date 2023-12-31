// export default function card(){
//     return(
//         <>
//             <div class="card" style="width: 18rem;">
//             <img src="https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg" class="card-img-top" alt="..."></img>
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//             </div>
//         </>
//     )
// }

const Card = () => {
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src="https://darshan.ac.in/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
               <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;