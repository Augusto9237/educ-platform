export function extractMonth(monthNum: number, completed?: boolean): string {
  if(completed) {
    const months = [
      'Janeiro',
      'Feveiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
  
    return months[monthNum - 1] || '';
  }

  const months = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ];

  return months[monthNum - 1] || '';
}
