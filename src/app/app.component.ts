import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: "server", name: "Test", content: "Just a test"  }];

  onServerAdded( serverData: { serverName: string, serverContent: string } ) {
        this.serverElements.push({
          type: 'server',
          name: serverData.serverName,
          content: serverData.serverContent
        });
        //console.log( "app-comp ServerName "+ serverData.serverName );
        //console.log( "app-comp newServerContent "+ serverData.serverContent );
  }

  onBlueprintAdded( blueprintData: { serverName: string, serverContent: string } ) {
        this.serverElements.push({
          type: 'blueprint',
          name: blueprintData.serverName,
          content: blueprintData.serverContent
        });
        //console.log( "app-comp blueprintName "+ blueprintData.serverName );
        //console.log( "app-comp blueprintContent "+ blueprintData.serverContent );
 }
}
