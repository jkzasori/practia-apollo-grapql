import { TableCustomContainer } from "./styles";

export const TableJk = ({ lisData, selectElement, showModal }) => {
  const tHeaderData = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>LastName</th>
          <th>Cédula</th>
          <th>Address</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
    );
  };

  const tBodyData = (list) => {
    return list?.map((item) => (
      <tr key={item?.id}>
        <td>{item?.firstName}</td>
        <td>{item?.lastName}</td>
        <td>{item?.cedula}</td>
        <td>{item?.address}</td>
        <td>{item?.state?.name}</td>
        <td>
          <button
            onClick={() => {
              selectElement(item);
              showModal();
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <TableCustomContainer>
      <table>
        {tHeaderData()}
        <tbody>{tBodyData(lisData)}</tbody>
      </table>
    </TableCustomContainer>
  );
};

export default TableJk;
