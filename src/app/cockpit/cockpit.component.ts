import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated    = new EventEmitter <{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter <{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';

  newBlueprintServerName = '';
  newBlueprintServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    //console.log( "cockpit server ServerName "+ this.newServerName );
    //console.log( "cockpit server ServerContent "+ this.newServerContent );
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
    //console.log( "cockpit blueprint ServerName "+ this.newServerName );
    //console.log( "cockpit blueprint newServerContent "+ this.newServerContent );
  }

}
