import { Layout } from "antd";
import Dashboard from "./InternetUsage/Pages/Dashboard";
import { ContextProvider } from "./Store/InternetUsage/reducer";
import Header from "./Common/components/Header";

function App() {
  return (
    <Layout>
      <Layout.Header className='flex justify-center content-center'>
        <Header />
      </Layout.Header>
      <ContextProvider>
        <Layout.Content className='p-8'>
          <Dashboard />
        </Layout.Content>
      </ContextProvider>
    </Layout>
  );
}

export default App;
