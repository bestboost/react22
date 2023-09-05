import { useLogOutRedirect } from 'components/hooks/useLogOutRedirect';

export const DashboardPage = () => {
  useLogOutRedirect();

  return <div>DashboardPage</div>;
};
