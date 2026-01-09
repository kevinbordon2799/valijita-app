export interface TravelItem {
  id: string;           // identificador único
  name: string;         // nombre del objeto
  category: string;     // categoría elegida
  packed: boolean;      // true = Empacado, false = Falta empacar
}

export type Categories = Record<string, string>;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}