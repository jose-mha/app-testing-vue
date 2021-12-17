import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

import { mockService } from '../../public/mockCall';

const wrapper = shallowMount(App);

describe('Testing the correct rendering of elements', () => {
  test('should render 2 sections', () => {
    //! comprueba que exista la clase y luego comprueba si el elemento es un section
    expect(wrapper.find('.app-pokemon-main').exists()).toBeTruthy();
    expect(wrapper.find('.app-pokemon-main').element.tagName.toLowerCase() == 'section').toBeTruthy();
    expect(wrapper.find('.app-pokemon-stats').exists()).toBeTruthy();
    expect(wrapper.find('.app-pokemon-stats').element.tagName.toLowerCase() == 'section').toBeTruthy();
  });

  test('should render 1 image', () => {
    //! comprueba que exista la clase y luego comprueba si el elemento es un section
    expect(wrapper.find('img').exists()).toBeTruthy();
    expect(wrapper.find('img').element.tagName.toLowerCase() == 'img').toBeTruthy();
  });

  test('should render 2 p', () => {
    //! comprueba que exista la clase y luego comprueba si el elemento es un section
    expect(wrapper.find('.pokemon-name').exists()).toBeTruthy();
    expect(wrapper.find('.pokemon-name').element.tagName.toLowerCase() == 'p').toBeTruthy();
    expect(wrapper.find('#abilities').exists()).toBeTruthy();
    expect(wrapper.find('#abilities').element.tagName.toLowerCase() == 'p').toBeTruthy();
  });

  test('should render 1 button', () => {
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button').element.tagName.toLowerCase() == 'button').toBeTruthy();
  });

  test('should render 1 ul', () => {
    expect(wrapper.find('ul').exists()).toBeTruthy();
    expect(wrapper.find('ul').element.tagName.toLowerCase() == 'ul').toBeTruthy();
  });

  test('should render 1 ul', () => {
    /**
     *! Normalmente cuando hacemos pruebas, tratamos de mantenerlas lo más modular posible,
     *! es decir, no probamos los hijos en los padres.
     *! En el caso de Vue, al no crear una etiqueta de nuestro componente,
     *! nos crea esta etiqueta con esa clase.
     */
    //* expect(wrapper.find('.component').exists()).toBeTruthy();
  });

  // console.log(wrapper.html());
});
