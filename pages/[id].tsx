import { NextPage } from "next";
import { useRouter } from "next/router";

type Props = { 
  idFromServer: string
}

const IdPage: NextPage<Props> = ({ idFromServer }) => {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>/[id] page</h1>
      <p>router.query.id is {router.query.id}</p>
      <p>ctx.query.id on getInitialProps is {idFromServer}</p>
    </div>
  );
};

IdPage.getInitialProps = async (ctx) => {
  console.log('/[id] getinitialprops')
  return {
    idFromServer: String(ctx.query.id)
  }
}

export default IdPage;
