export interface Product {
  age: number,
  id: string,
  type: 'phone' | 'tablet' | 'accessory',
  imageUrl: string,
  name: string,
  snippet: string,
  price: number,
  discount: number,
  screen: string,
  capacity: string,
  ram: string,
}

export interface ProductDetails {
  additionalFeatures: string,
  android: {
    os: string,
    ui: string,
  },
  availability: string[],
  battery: {
    standbyTime: string,
    talkTime: string,
    type: string,
  },
  camera: {
    features: string[],
    primary: string,
  },
  connectivity: {
    bluetooth: string,
    cell: string,
    gps: boolean,
    infrared: boolean,
    wifi: string,
  },
  description: string,
  display: {
    screenResolution: string,
    screenSize: string,
    touchScreen: boolean,
  },
  hardware: {
    accelerometer: boolean,
    audioJack: string,
    cpu: string,
    fmRadio: boolean,
    physicalKeyboard: boolean,
    usb: string,
  },
  id: Pick<Product, 'id'>,
  images: Pick<Product, 'imageUrl'>[],
  name: Pick<Product, 'name'>,
  sizeAndWeight: {
    dimensions: string[],
    weight: string
  },
  storage: {
    flash: string,
    ram: Pick<Product, 'ram'>,
  }
}
