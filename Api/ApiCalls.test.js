import { fetchWeather } from './ApiCalls';
import React from 'react';
import { ApiKey } from './ApiKey'

describe('apiCalls', () => {
  describe('fetchWeather', () => {
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        foreCast: {
          apparentTemperature: 97.86,
          cloudCover: 0.21,
          dewPoint: 18.35,
          humidity: 0.06,
          icon: "partly-cloudy-day",
          nearestStormBearing: 240,
          nearestStormDistance: 4,
          ozone: 282.3,
          precipIntensity: 0,
          precipProbability: 0,
          pressure: 1011.12,
          summary: "Partly Cloudy",
          temperature: 97.86,
          time: 1567455462,
          uvIndex: 7,
          visibility: 3.936,
          windBearing: 146,
          windGust: 11.76,
          windSpeed: 5.15,
        }
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      })
    })
    it('should be able to return the weather given a url', () => {
      console.log('success')
    })
  })
})