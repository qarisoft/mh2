interface SlideProps {
    Img:string
}

export const ThumItem = ({Img}: SlideProps) => {
  
    return (
        <>
<div className="item">
    <img src={Img}/>
    <div className="content">
        <div className="title">
            Name Slider
        </div>
        <div className="description">
            Description
        </div>
    </div>
</div>
        </>
    );
  };