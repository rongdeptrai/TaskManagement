import CircularProgress from "@mui/material/CircularProgress";
import { TodoCheck } from "../styles/Card.styles";
const CardToDo = (props) => {
  const countProges = (listprops) => {
    return listprops.length;
  };

  const doneProges = (listprops) => {
    return listprops.reduce((count, progress) => {
      return progress.status ? count + 1 : count;
    }, 0);
  };

  const donePercent = (listprops) => {
    return (doneProges(listprops) / countProges(listprops)) * 100;
  };
  return (
    <TodoCheck>
      <CircularProgress
        variant='determinate'
        value={donePercent(props.todo.listprops)}
        style={{
          border: "1px solid rgb(231, 231, 231)",
          borderRadius: "50%",
        }}
        size={30}
      ></CircularProgress>
      Đi mua
    </TodoCheck>
  );
};
export default CardToDo;
