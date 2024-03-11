import { Commission } from "../constans/commission";

interface Props {
  commission: Commission;
}

function CommissionsItem(props: Props) {
  const commission = props.commission;
  const { description, price } = commission;
  return (
    <>
      <h3>{description}</h3>
      <p>Price: {price}</p>
    </>
  );
}

export default CommissionsItem;
