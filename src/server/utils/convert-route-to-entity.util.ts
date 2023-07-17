const mapping: Record<string, string> = {
  employees: 'employee',
  guests: 'guest',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
