import { FC } from 'react';
import { RouteProps } from 'react-router-dom';

export interface IRoute extends RouteProps {
  pathname: string;
  name: string;
  title: string;
  component: FC;
  beforeCreate: (route: IRoute) => void;
  beforeDestroy: (route: IRoute) => void;
  meta: {
    navigation: string;
    requireAuth: boolean;
  };
}
