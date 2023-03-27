
export function getNextMonday() {
    const options:Intl.DateTimeFormatOptions  = {
        year: "numeric",
        month: "short",
        day: "numeric",
      };
    
      const d = new Date();
      d.setDate(d.getDate() + (7-d.getDay())%7+1);

      return d.toLocaleDateString('en-GB', options);
}