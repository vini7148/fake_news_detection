import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidUploadComponent } from './vid-upload.component';

describe('VidUploadComponent', () => {
  let component: VidUploadComponent;
  let fixture: ComponentFixture<VidUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
