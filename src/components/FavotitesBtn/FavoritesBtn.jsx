import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import {
  addToFavorite,
  deleteFromFavorites,
} from "../../redux/favorites/favoritesSlice";
import { FavBtn, FavIconActive, FavIconNormal } from "./FavoritesBtn.styled";
import icons from "../../assets/sprite.svg";

const FavoritesBtn = ({ advert }) => {
  const dispatch = useDispatch();
  const favAdverts = useSelector(selectFavorites);
  const isAdvertInFavorites = favAdverts.some((item) => item.id === advert.id);
  return (
    <>
      {isAdvertInFavorites ? (
        <FavBtn onClick={() => dispatch(deleteFromFavorites(advert))}>
          <FavIconActive>
            <use href={`${icons}#icon-heart-active`}></use>
          </FavIconActive>
        </FavBtn>
      ) : (
        <FavBtn onClick={() => dispatch(addToFavorite(advert))}>
          <FavIconNormal>
            <use href={`${icons}#icon-heart-normal`}></use>
          </FavIconNormal>
        </FavBtn>
      )}
    </>
  );
};

export default FavoritesBtn;
