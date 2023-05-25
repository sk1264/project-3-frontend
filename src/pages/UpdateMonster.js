import { useNavigate, useParams } from "react-router-dom";
import "./Update.css";
import { useEffect, useState } from "react";

function UpdateMonster() {
  const [nameState, setNameState] = useState("");
  const [imageState, setImageState] = useState("");
  const [commonLocationState, setCommonLocationState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [difficultyState, setDifficultyState] = useState("");
  const [tipsState, setTipsState] = useState("");
  const navigate = useNavigate();
  const url = `https://zelda-backend.onrender.com/monsters/${id}`;
  useEffect(() => {
    const fetchMonster = async () => {
        console.log('going to fetch person with id of: ', id);
        try {
            const responseData = await fetch(url);
            const monsterData = await responseData.json();
            console.log(monsterData)
            const {name, image, commonLocation, description, difficulty, tips} = monsterData;
            setNameState(name);
            setImageState(image);
            setCommonLocationState(commonLocation);
            setDescriptionState(description);
            setDifficultyState(difficulty);
            setTipsState(tips);
        } catch (error) {}
    };
    fetchMonster();
  }, [id]);
  const onChangeHandler = (e, setValue) => {
    console.log(e.target.value)
    setValue(e.target.value)
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const updatedMonster = {
        name: nameState,
        image: imageState,
        commonLocation: commonLocationState,
        description: descriptionState,
        difficulty: difficultyState,
        tips: tipsState,
    };
    console.log("updated monster: ", updatedMonster);
    const options = {
        method: 'DELETE',
    };
    const responseData = await fetch(url, options);
    const response = await responseData.json();
    console.log(response)
    navigate(`/`)
  }
  return (
    <div className="">
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={nameState}
          name="name"
          placeholder="name"
          onChange={(e) => onChangeHandler(e, setNameState)}
        />
        <input
          type="text"
          value={imageState}
          name="image"
          placeholder="image URL"
          onChange={(e) => onChangeHandler(e, setImageState)}
        />
        <input
          type="text"
          value={commonLocationState}
          name="commonLocation"
          placeholder="common location"
          onChange={(e) => onChangeHandler(e, setCommonLocationState)}
        />
        <input
          type="text"
          value={descriptionState}
          name="description"
          placeholder="description"
          onChange={(e) => onChangeHandler(e, setDescriptionState)}
        />
        <input
          type="text"
          value={difficultyState}
          name="difficulty"
          placeholder="difficulty"
          onChange={(e) => onChangeHandler(e, setDifficultyState)}
        />
          <input
          type="text"
          value={tipsState}
          name="tips"
          placeholder="tips"
          onChange={(e) => onChangeHandler(e, setTipsState)}
        />
        <input type="submit" value=":white_check_mark:UPDATE Monster" />
        <input
          onClick={onDeleteHandler}
          type="button"
          value=":dizzy_face:DELETE MONSTER"
        />
      </form>
    </div>
  );
}
export default UpdateMonster