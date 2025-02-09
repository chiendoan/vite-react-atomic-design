import {
  BrowserRouter as Router,
  // Routes,
  Route,
  Switch,
} from "react-router-dom";
import Layout from "@/components/ui/templates/Layout";
import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import routes from "./config/routes";
import { Route as AppRoute } from "@/types";
import { PageDefault } from "./components/PageDefault";

const theme = createTheme({
  palette: {
    primary: { main: "#FFC0CB" },
    secondary: { main: "#dc004e" },
  },
});

function App() {
  const addRoute = (route: AppRoute) => (
    <Route
      key={route.key}
      path={route.path}
      component={route.component || PageDefault}
      exact
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            {/* <Route path="/home" component={Home} />
            <Route path="/customer" component={Customer} /> */}
            {routes.map((route: AppRoute) =>
              route.subRoutes
                ? route.subRoutes.map((item: AppRoute) => addRoute(item))
                : addRoute(route)
            )}
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
