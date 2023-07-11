#include <iostream>
#include <bits/stdc++.h>
using namespace std;

struct node
{
   int data;
   node *left;
   node *right;
};
 node *newNode(int data)
{
   node *element = new node();
   element->data = data;
   element->left = NULL;
   element->right = NULL;

   return element;
}
// node *newNode(int data)
// {
//    node *node = new struct node();
//    node->data = data;
//    node->left = NULL;
//    node->right = NULL;

//    return node;
// }
void printNode(node*n){
   while(n!=NULL){
      cout << n-> data << " ";
      n=n->left;
      n=n->right;
   }
   cout << endl;
}
node* search(node*root, int key){

    if(root == NULL || root -> data == key){
        return root;
    }

    if(root-> data < key){
        search(root -> right , key);
    }else{
        search(root-> left , key);
    }

}
int main()
{
   node*root = newNode(4);
   root -> left =newNode(2);
   root -> right = newNode(5);

   root ->left->left = newNode(1);
   root ->left->right = newNode(3);

   //printNode(root);

   cout << search(root , 5) << endl;

   return 0;
}