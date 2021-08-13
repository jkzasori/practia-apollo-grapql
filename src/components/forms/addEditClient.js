import { AddEditClient } from "./style";
import { useState } from "react";
import { useLocation } from "wouter";

const FormClient = ({
  listState = [],
  dataDefault = "",
  editSaveFunction,
  closeModal,
}) => {
  const [, setLocation] = useLocation();

  const [firstName, setFirstName] = useState(dataDefault?.firstName || "");
  const [lastName, setLastName] = useState(dataDefault?.lastName || "");
  const [cedula, setCedula] = useState(dataDefault?.cedula || "");
  const [address, setAddress] = useState(dataDefault?.address || "");
  const [state, setState] = useState(dataDefault?.state?.id || "");
  const [cellphone, setCellphone] = useState(dataDefault?.cellphone || "");
  const [email, setEmail] = useState(dataDefault?.email?.id || "");
  const [city, setCity] = useState("");

  return (
    <AddEditClient>
      <h2>{!dataDefault ? "New " : "Edit "}Client</h2>
      <input
        defaultValue={dataDefault?.firstName || ""}
        placeholder="Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        defaultValue={dataDefault?.lastName || ""}
        placeholder="LastName"
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        placeholder="Cédula"
        defaultValue={dataDefault?.cedula || ""}
        onChange={(e) => setCedula(e.target.value)}
      />
      {!dataDefault?.state?.id && (
        <>
          <input
            placeholder="Email"
            defaultValue={dataDefault?.email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </>
      )}
      <input
        placeholder="Cellphone"
        defaultValue={dataDefault?.cellphone || ""}
        onChange={(e) => setCellphone(e.target.value)}
      />

      <input
        placeholder="Address"
        defaultValue={dataDefault?.address || ""}
        onChange={(e) => setAddress(e.target.value)}
      />
      {!dataDefault?.state?.id && (
        <>
          {" "}
          <select
            defaultValue={dataDefault?.state?.id || ""}
            placeholder="State"
            type="select"
            onChange={(e) => setState(e.target.value)}
          >
            <option value={""}>states</option>
            {listState?.map((item) => (
              <option key={item?.id} value={item?.id}>
                {item?.name}
              </option>
            ))}
          </select>
          <select
            placeholder="State"
            type="select"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value={""}>cities</option>
            {console.log()}
            {listState &&
              listState
                ?.find((value) => value?.id === parseInt(state))
                ?.cities.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.name}
                  </option>
                ))}
          </select>
        </>
      )}
      <button
        onClick={() => {
          if (dataDefault) {
            //Se edita el cliente
            editSaveFunction({
              variables: {
                id: dataDefault.id,
                input: {
                  firstName,
                  lastName,
                  cedula,
                  cellphone,
                  address: {
                    streetAddress: address,
                    stateId: parseInt(state),
                  },
                },
              },
            });
          } else {
            //Se guarda el nuevo cliente y se redirige a la nueva vista
            if (
              firstName &&
              lastName &&
              cedula &&
              cellphone &&
              email &&
              address &&
              state &&
              city
            ) {
              setLocation("/new-user/");
              editSaveFunction({
                variables: {
                  input: {
                    firstName,
                    lastName,
                    cedula,
                    cellphone,
                    email,
                    address: {
                      streetAddress: address,
                      stateId: parseInt(state),
                      cityId: parseInt(city),
                    },
                  },
                },
              });
            }
          }
          closeModal(false);
        }}
      >
        {!dataDefault ? "Save" : "Edit"}
      </button>
    </AddEditClient>
  );
};

export default FormClient;
