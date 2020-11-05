import './App.css';
import {React, useEffect} from 'react'
import {connect, useDispatch, useSelector} from "react-redux";
import {fetch, request} from "./redux/action";

// class App extends React.Component {
//
//     componentDidMount() {
//         this.props.fetch()
//     }
//
//     render() {
//         console.log(this.props.data)
//         return (
//             <div className="App">
//             </div>
//         );
//     }
// }

function App() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.users)
    useEffect(() => {
        dispatch(fetch())
    }, [])

    return (
        <>
            {console.log(data)}
        </>
    )
}


// const mapStateToProps = state => ({
//     data: state.users
// })
//
// const mapDispatchToProps = dispatch => ({
//     fetch: () => dispatch(fetch())
// })


// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App
