import { combineReducers } from "redux";
import movies from "./movies/reducers";
import moviesDetails from "./details/reducers";
import similarReducer from "./similar/reducers";
import favoriteReducer from "./favorite/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["favorites"] // which reducer want to store
};

const rootReducer = combineReducers({
	movies,
	moviesDetails,
	similar: similarReducer,
	favorites: favoriteReducer
});

export default persistReducer(persistConfig, rootReducer);
