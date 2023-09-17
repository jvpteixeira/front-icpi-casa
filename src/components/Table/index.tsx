import TableHeader from './TableHeader';
import { TableBodyStyled, TableStyled } from './style';

export default function Table() {
  return (
    <TableStyled>
      <TableHeader>
        <th>Cliente</th>
        <th>Corte</th>
        <th>Barbeiro</th>
        <th>Horário</th>
        <th>Ação</th>
      </TableHeader>

      <TableBodyStyled>
        <tr>
          <td>João Seboso</td>
          <td>Moicano</td>
          <td>Seu madruga</td>
          <td>10:00</td>
          <td>Cadastrr</td>
        </tr>
        <tr>
          <td>João Seboso</td>
          <td>Moicano</td>
          <td>Seu madruga</td>
          <td>10:00</td>
          <td>Cadastrr</td>
        </tr>
        <tr>
          <td>João Seboso</td>
          <td>Moicano</td>
          <td>Seu madruga</td>
          <td>10:00</td>
          <td>Cadastrr</td>
        </tr>
      </TableBodyStyled>
    </TableStyled>
  );
}
