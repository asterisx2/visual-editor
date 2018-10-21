import { Component, OnInit, OnDestroy } from '@angular/core';
import { EditorService } from 'src/app/core/services/editor.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {

  constructor(private editorService: EditorService) { }

  nodeTreeUpdate(): void {

  }

  ngOnInit(): void {
    this.editorService.subscribe(this.nodeTreeUpdate);
  }

  ngOnDestroy(): void {
    this.editorService.unsubscribe(this.nodeTreeUpdate);
  }

}
