//React
import { React, Route } from 'react';
import { mount, route , withView} from 'navi';
import { NotFoundBoundary, View, useLoadingRoute } from 'react-navi';
import BusyIndicator from 'react-busy-indicator';

//Components
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import SignIn from './SignIn';
import ImageUpload from './ImageUpload';
import Nav from './Nav';
import Footer from './Footer';

// This switch will be mounted under "/support" route
// that is managed by react-router.
// export const routes = withView (
//     <Layout>
//         <View />
//     </Layout>,
//     mount({
//         '/': route({
//             view: (<Home />)
//         }),

//         '/aboutus': route({
//             view: (<About />)
//         }),

//         '/gallery': route({
//             view: (<Gallery />)
//         }),

//         '/contactus': route({
//             view: (<Contact />)
//         }),

//         '/admin/signin': route({
//             view: (<SignIn />)
//         }),

//         '/admin/upload': route({
//             view: (<ImageUpload />)
//         }),
//     })
// );

export default function Routes() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contactus" component={Contact} />
            <Route path="/admin/signin" component={SignIn} />
            <Route path="/admin/upload" component={ImageUpload} />
        </div>
    )
}

function Layout( { children }) {
    let loadingRoute = useLoadingRoute()

    return (
        <div className="App">
            <BusyIndicator
            color="#1ee79e"
            delayMs={333}
            isBusy={!!loadingRoute}
            />
            <main>
                <NotFoundBoundary render={renderNotFound}>
                    {children || null}
                </NotFoundBoundary>
            </main>
        </div>  
    )
}
  
function renderNotFound() {
    return (
        <div className='App-error'>
            <h1>404 - Not Found</h1>
        </div>
    )
}