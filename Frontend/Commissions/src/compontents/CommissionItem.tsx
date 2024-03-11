import { Commission } from "../constans/commission";

interface Props {
  commission: Commission;
}

function CommissionsItem(props: Props) {
  const commission = props.commission;
  const { description, price } = commission;
  return (
    <tr key={commission.id}>
      <td className="px-4 py-2 border border-gray-300">
        <h3 className="font-semibold">{description}</h3>
      </td>
      <td className="px-4 py-2 border border-gray-300">
        <p>Price: {price}</p>
      </td>
    </tr>
  );
}

export default CommissionsItem;
