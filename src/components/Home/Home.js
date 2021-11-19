import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Services from '../Services/Services';
import Trainer from '../Trainer/Trainer';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Trainer></Trainer>
            <Blog></Blog>
            <About></About>
        </div>
    );
};

export default Home;