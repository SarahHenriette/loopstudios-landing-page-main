function ViewDeskopCreation(){
    const [creas, setCreas] = React.useState([{a: "image-deep-earth", b: "deep earth"}, 
                                                {a: "image-night-arcade", b: "night arcade"},
                                                { a: "image-soccer-team", b: "soccer team vr"},
                                                {a: "image-grid", b: "the grid"},
                                                {a:"image-from-above", b: "from up arov vr"}, 
                                                {a:"image-pocket-borealis",b: "pocket borealis"},
                                                {a: "image-curiosity", b: "the curiosity"},
                                                {a:"image-fisheye", b: "make it fisheye"} ]); 
    
    let mediaQueries = window.matchMedia("(min-width: 775px)").matches;
    let viewDesktop = listCreations("desktop", "contain-img", "img")
    let viewMobile = listCreations("mobile", "contain-img-mobile", "img-mobile")

    return (
        <div class="container-images-creations ">{mediaQueries  ? viewDesktop : viewMobile}</div>
    )

    function listCreations(view,valueClassNameContain, valueClassNameImg) {
        return creas.map((crea)=>
        <div class={valueClassNameContain}>
            <img src={"./images/"+ view +"/"+ crea.a +'.jpg'} className={valueClassNameImg}/>
            <p>{crea.b}</p>
        </div>)
    }
}

class App extends React.Component {
    render() {
        return (
            <ViewDeskopCreation/>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );