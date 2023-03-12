export function extractMonth(data: string): string {
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
    
    const month = new Date(data).getMonth();
    return months[month];
  }
  