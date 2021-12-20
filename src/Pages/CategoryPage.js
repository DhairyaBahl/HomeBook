import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Main from "../Components/Main/Main";
import { useLocation, useParams } from "react-router-dom";

function CategoryPage() {

    const params = useParams();

    const categoryId = params.categoryId;

    return (
        <>
            <Header />
            <Main categoryId={categoryId}/>
            <Footer />
        </>
    )
}

export default CategoryPage;