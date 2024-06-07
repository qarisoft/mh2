interface SlidePrope {
    Img:string,
    Next:boolean,
}
interface NEXT{
    Next:boolean
}

export const SlideItem = ({Img,Next}: SlidePrope) => {
  
    return (
        <>
         <div className={Next?'item next ':'item '}>
            <img src={Img}/>
            <div className="content">
                <div className="author">LUNDEV</div>
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">ANIMAL</div>
                <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt
                    minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda
                    facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi
                    reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum
                    laudantium?
                </div>
                <div className="buttons">
                    <button>SEE MORE</button>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        </>
    );
  };