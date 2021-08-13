import { useState } from "react";
import { LogOut, TableJk, Modal, FormClient } from "../../components";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { clientService } from "../../libs/services";
import { ContainerData } from "./style";
import { FaPlus } from "react-icons/fa";
const Client = () => {
  const [showModal, setShowModal] = useState(false);
  const [elementSelected, setElementSelected] = useState("");

  const { data, loading } = useQuery(clientService.getListClients, {
    context: {
      headers: {
        Authorization: `Token ` + JSON.parse(localStorage.getItem("userTK")),
      },
    },
  });

  const dataStates = useQuery(clientService.getStateList, {
    context: {
      headers: {
        Authorization: `Token ` + JSON.parse(localStorage.getItem("userTK")),
      },
    },
  });
  const [create] = useMutation(clientService.createClient, {
    context: {
      headers: {
        Authorization: `Token ` + JSON.parse(localStorage.getItem("userTK")),
      },
    },
  });
  const [editClient] = useMutation(clientService.editClient, {
    context: {
      headers: {
        Authorization: `Token ` + JSON.parse(localStorage.getItem("userTK")),
      },
    },
  });

  return (
    <ContainerData>
      {console.log(localStorage.getItem("userTK"))}
      <Modal
        height={`95%`}
        width={`65%`}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <FormClient
          closeModal={setShowModal}
          editSaveFunction={elementSelected ? editClient : create}
          listState={dataStates?.data?.states}
          dataDefault={elementSelected}
        />
      </Modal>
      <h4>Soy un cliente</h4>
      <button
        onClick={() => {
          setElementSelected("");
          setShowModal(!showModal);
        }}
      >
        <FaPlus />
      </button>
      <LogOut />
      {loading ? (
        <h5>Loading</h5>
      ) : (
        <TableJk
          lisData={data?.clientsSearch?.results}
          selectElement={setElementSelected}
          showModal={() => setShowModal(!showModal)}
        />
      )}
    </ContainerData>
  );
};

export default Client;
