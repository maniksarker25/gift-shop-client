import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute requiredRoles={undefined}>
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
