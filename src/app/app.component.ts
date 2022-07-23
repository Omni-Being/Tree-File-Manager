import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { of as observableOf } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { files } from './example';



/** File node data with nested structure. */
export interface FileNode
{
	name: string;
  	type: string;
  	children?: FileNode[];
  	path:string;
}



/** Flat node with expandable and level information */
export interface TreeNode
{
	name: string;
	type: string;
	level: number;
	expandable: boolean;
	path:string;
}



@Component(
{
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.scss']
})



export class AppComponent
{
  	title = 'fex';
	
	/** The TreeControl controls the expand/collapse state of tree nodes.  */
   	treeControl: FlatTreeControl<TreeNode>;

	/** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
	treeFlattener: MatTreeFlattener<FileNode, TreeNode>;
	
	/** The MatTreeFlatDataSource connects the control and flattener to provide data. */
	dataSource: MatTreeFlatDataSource<FileNode, TreeNode>;
 

	constructor()
	{
		this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
		this.treeControl = new FlatTreeControl<TreeNode>(this.getLevel, this.isExpandable);
		this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
		this.dataSource.data = files;
	}

 
	/** Transform the data to something the tree can read. */
	transformer(node: FileNode, level: number)
	{
		return { name: node.name, type: node.type, level: level, expandable: !!node.children, path:node.path };
	}
 

	/** Get the level of the node */
	getLevel(node: TreeNode)
	{
		return node.level;
	}

 
	/** Return whether the node is expanded or not. */
	isExpandable(node: TreeNode)
	{
		return node.expandable;
	};
 

	/** Get the children for the node. */
	getChildren(node: FileNode):any
	{
		return observableOf(node.children);
	}
 

   	/** Get whether the node has children or not. */
	hasChild(index: number, node: TreeNode)
	{
		return node.expandable;
	}

	
	/* Click on Status */
	getNode(param:any)
	{
		console.log(param);
	}
}