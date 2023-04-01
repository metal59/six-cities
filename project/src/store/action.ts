import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../const';
import { Offers } from '../types/offer';
import { AppRoute, AuthorizationStatus } from '../const';
import { Email } from '../types/email';

export const setCity = createAction<CityName>('page/setCity');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');

export const setEmail = createAction<Email>('data/setEmail');
