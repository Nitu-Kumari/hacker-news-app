import { FETCH_RESULTS,NEW_RESULT} from './types';

export const  fetchResults =() =>dispatch=>{

         fetch(`https://aqueous-anchorage-59480.herokuapp.com/search?query=${query}&tags=${tags}&page=${page}`)
           .then(res=>res.json())
           .then(results=>
            dispatch({
                type:FETCH_RESULTS,
                payload:results

            })
        );


};


