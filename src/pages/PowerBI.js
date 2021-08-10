import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models, Report, Embed } from 'powerbi-client';
import { Container } from 'react-bootstrap';

import '../scss/powerbi.scss';

export default () => {

  const EmbedURL = 'https://app.powerbi.com/reportEmbed?reportId=71bcefd5-7cd7-4792-9d03-e00fd95f40b5&groupId=c4be6bf0-ba50-487f-9544-c9ebb94b230b&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtVVMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d';
  const AccessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjdmNjA0YTAtMDBhOS00MTg4LTkyNDgtNDJmM2E1YWFjMmU5LyIsImlhdCI6MTYyODU0ODA1OCwibmJmIjoxNjI4NTQ4MDU4LCJleHAiOjE2Mjg1NTE5NTgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFsSE9zRUNKblZ5UXpyY3daWjlqbTBFWWJKd2tmclIyV1VsbWU0eU5HZlJvRG55dCtJMDR2Tk10OG9ySE94dXVIOXdHMGRFWnNpT2ZuN0JISzVPbnV3YUtRaU1sZW12YjVHeCtxeWhlcjZaTT0iLCJhbXIiOlsicHdkIiwicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZGV2aWNlaWQiOiI2NjI3OTlmNS04NWJjLTRkNDUtOTczMC1iM2ZmZWQ4N2YzNDAiLCJmYW1pbHlfbmFtZSI6IlZpeXlhcHUiLCJnaXZlbl9uYW1lIjoiUHJhZGVlcCIsImlwYWRkciI6IjcyLjIwOC44NS43MCIsIm5hbWUiOiJQcmFkZWVwIEt1bWFyIiwib2lkIjoiMDhkMDA5MGMtM2YxOS00Njg1LTg4MTYtNzljYmIzZjZmZWFhIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTE5MjM4MjgzMTktMzg0NDU2MTkxLTExNTk0MjIyMjUtMTU2MDM4MSIsInB1aWQiOiIxMDAzM0ZGRjhDQzUzMzExIiwicmgiOiIwLkFRNEFvQVQydDZrQWlFR1NTRUx6cGFyQzZROEJISWRoWHJGUGc2eVlZUXAta1JBT0FLay4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiIwSGRNa0ZTU09aSEdDVWRfX3pZRXBqcFJSbHZKZVhkS0FQd3JYRWRRdkJFIiwidGlkIjoiYjdmNjA0YTAtMDBhOS00MTg4LTkyNDgtNDJmM2E1YWFjMmU5IiwidW5pcXVlX25hbWUiOiJwdml5eTAwQHNhZmV3YXkuY29tIiwidXBuIjoicHZpeXkwMEBzYWZld2F5LmNvbSIsInV0aSI6IlREX3NBUjRpN1V1a3A4VVdjQ3BXQWciLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.fLGAGwsvvlJYXEkSBNUQg3QDYp01Hd4xJ8CcxUgVAJ63fk0THpKyXqIywCARyd5C1OM8giTy1R8uGsBhbXDxX17ZnMNXz2__vkN50qacgX77gCLQE0ipzD5VelalWO6Sq4-8az13GyRDQItcjoJfWkkDpr-oDnDAsJVrdUhK80AMAGLhHySEJXLHFNWAOnTD9FbusKA6FT888Bc2z2qM3O2KvhmRs2dNvwQcTPBbprUE9HldZBjjUiQmhrjSRXBKBeHWtNTiC3ZyD_Q0wigC0wj-BBO6nwWCu33DMPb93AEGFn1CyNI4wZ7VRJVP7it1qATfOy-IZVvuBPI-AzALcg";
  const EmbedId = "71bcefd5-7cd7-4792-9d03-e00fd95f40b5";

  const publicEmbedURL = 'https://app.powerbigov.us/view?r=eyJrIjoiN2E2YzcwMjQtYzRmNy00MzM4LTliNTMtMTBjNmVmYjMzNTg1IiwidCI6IjIyZDVjMmNmLWNlM2UtNDQzZC05YTdmLWRmY2MwMjMxZjczZiJ9';

  const reportConfig = {
    type: 'report',
    id: 'test',
    embedUrl: publicEmbedURL,
    tokenType: models.TokenType.Embed,
    accessToken: AccessToken,
    settings: undefined,
  }


  return (
    <div id="powerbi" style={{height: '1000px'}}>
      <PowerBIEmbed
        style={{
          height: '1000px'
        }}
          embedConfig={reportConfig}
        />
    </div>
  )
}